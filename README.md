# AI-Powered Topic Research, Summarizer & Explainer

## Project Overview
This project is a web-based learning assistant developed as part of the Problem Based Learning (PBL) course.  
The system allows a user to enter any academic topic and automatically generates:

- A short summary  
- A detailed explanation in simple language  
- Key bullet points for quick revision  
- A short conclusion useful for exams  

The goal of this project is to reduce the time students spend searching multiple sources and help them quickly understand important concepts.

---

## Problem Statement
Students often struggle to understand new topics because information is scattered across different websites, videos, and books.  
Manual searching and note-making takes a lot of time and effort.

There is a need for a simple AI-based tool that can **research, summarize, and explain any topic instantly** in a student-friendly manner.

---

## Objective
The main objectives of this project are:

- To build a web application that accepts a topic as input  
- To use Artificial Intelligence to generate meaningful study content  
- To present the information in a clear and structured format  
- To help students in quick learning and exam revision  

---

## Methodology
The working of the system follows these steps:

1. User enters a topic in the Live Demo section  
2. The request is sent to the backend server  
3. The backend uses **Google Gemini API** to:
   - Research the topic  
   - Generate summary and explanation  
   - Produce key points and conclusion  
4. The generated content is displayed on the website in organized sections  

---

## Features
- Simple and clean academic user interface  
- Topic-based AI research and summarization  
- Easy-to-read explanation for beginners  
- Quick revision bullet points  
- Fast response using modern AI models  

---

## Technology Stack

### Frontend
- HTML  
- CSS  
- JavaScript / React (depending on version used)

### Backend
- Python  
- FastAPI  

### AI Integration
- Google Gemini API for content generation  

---

## How to Run the Project

### 1. Clone the repository
```bash
git clone <your-repo-link>
cd <project-folder>
pip install -r requirements.txt
GEMINI_API_KEY=your_api_key_here
uvicorn main:app --reload

