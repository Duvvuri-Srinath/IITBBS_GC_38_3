# IIT GPT

## Overview
IIT GPT is an intelligent chatbot powered by OpenAI's LLM chained with LangChain, designed to provide comprehensive information related to our institute. From academic calendars to curriculum details, fee structures, holiday lists, and more, IIT GPT aims to be your one-stop solution for accessing vital information about the Indian Institute of Technology Bhubaneswar.

## Features
- **Academic Calendar**: Stay updated with important dates, events, and schedules within the academic year.
- **Curriculum**: Access details about the curriculum of various branches offered at IIT.
- **Fee Structure**: Learn about the fee structures of different programs offered by the institute.
- **Holiday List**: Get information about holidays observed by the institute.
- **Time Table**: View and manage your schedule with ease.
- **Gymkhana Constitution**: Access the constitution of the Gymkhana for governance and organizational purposes.
- **Reference Material**: Find reference books, notes, tutorials, assignments, and previous year question papers specifically tailored for the Computer Science and Engineering (CSE) branch.
  
## Technologies Used
- **Frontend**: React with TypeScript, Tailwind CSS
- **Backend**: Flask (Python)
- **API**: OpenAI
- **Additional Tools**: Langchain for language processing
  
## Future Features
- **Context for Current Chats**: Enhance conversational context for a more personalized experience.
- **Upload New Material**: Allow users to contribute and share new study material.
- **Chat History and Authentication**: Implement chat history and user authentication for enhanced security.
- **Multimodal Input and Output**: Enable support for images and other multimedia inputs, leveraging a vector database for efficient storage and retrieval.


## How it Works 
![WhatsApp Image 2024-03-31 at 21 13 31_531954ee](https://github.com/bhanvara/iit-bbs-gpt/assets/131417445/fa37863c-a191-463b-8d75-6f227cbf713c)
## GPT Model Workflow

This GPT model operates by integrating chat history and new questions to generate contextually relevant answers. Below is the workflow:

- **Input**: Receives a **New Question** and considers **Chat History** for context.
- **Processing**:
  - The **LLM (Large Language Model)** processes the input to formulate a **Standalone Question**.
  - This question is then matched against a **Vectorstore** via a **Similarity Search** to find related queries and their answers.
- **Output**: Another LLM uses the enriched data to produce an accurate and context-aware **Answer**.

## Project Source
The project was inspired by the article ["Retrieval: Learn how to make a chatbot that remembers"](https://blog.langchain.dev/retrieval/) published on Langchain's blog.

The model's design ensures that each response is informed by previous interactions, providing precise and helpful answers.




