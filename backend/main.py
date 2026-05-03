from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from supabase import create_client
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")

print("URL Loaded:", url)   # Debug

supabase = create_client(url, key)