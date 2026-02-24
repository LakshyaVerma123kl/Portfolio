
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import httpx
import sqlite3
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://portfolio-six-peach-12.vercel.app",
        "http://localhost:3000",
    ],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

if not GROQ_API_KEY:
    raise RuntimeError("GROQ_API_KEY is not set in the .env file")

conn = sqlite3.connect("chat_history.db", check_same_thread=False)
cursor = conn.cursor()
cursor.execute("CREATE TABLE IF NOT EXISTS history (id INTEGER PRIMARY KEY, role TEXT, content TEXT)")
conn.commit()

class ChatRequest(BaseModel):
    message: str

@app.post("/api/chat")
async def chat(request: ChatRequest):
    try:
        cursor.execute("INSERT INTO history (role, content) VALUES (?, ?)", ("user", request.message))
        conn.commit()

        system_prompt = (
    "You are the AI assistant embedded in Lakshya Verma's portfolio website. "
    "Answer visitors' questions about Lakshya concisely and professionally. "
    "If you don't know something specific about Lakshya, let the visitor know they can reach out to him directly."
)

        headers = {
            "Authorization": f"Bearer {GROQ_API_KEY}",
            "Content-Type": "application/json"
        }
        
        data = {
            "model": "llama-3.3-70b-versatile",
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": request.message}
            ]
        }

        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://api.groq.com/openai/v1/chat/completions", 
                headers=headers, 
                json=data, 
                timeout=30.0
            )
            
            # If Groq throws an error, print it and return it clearly
            if response.status_code != 200:
                error_details = response.text
                print(f"\n--- GROQ ERROR ---")
                print(f"Status Code: {response.status_code}")
                print(f"Error Details: {error_details}")
                print(f"------------------\n")
                raise HTTPException(status_code=502, detail=f"Groq API Error: {error_details}")

        response_json = response.json()
        ai_message = response_json["choices"][0]["message"]["content"]

        cursor.execute("INSERT INTO history (role, content) VALUES (?, ?)", ("assistant", ai_message))
        conn.commit()

        return {"reply": ai_message}

    except HTTPException:
        # Prevents FastAPI from swallowing our custom HTTPExceptions
        raise
    except Exception as e:
        print(f"\n--- SERVER CRASH ---")
        print(f"Exception: {str(e)}")
        print(f"--------------------\n")
        raise HTTPException(status_code=500, detail="Internal Server Error")