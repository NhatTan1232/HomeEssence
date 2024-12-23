# HomeEssence

## Installation

To get started with HomeEssence, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/NhatTan1232/HomeEssence.git
   cd HomeEssence
   ```

2. **Install Dependencies:**
   Navigate to the backend folder and install the required dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   npm install
   ```

3. **Create the Database:**
   Use the `tables.sql` file to create the necessary database tables:
   ```bash
   psql -U your_username -d your_database -f tables.sql
   ```

4. **Load Data:**
   Load data into PostgreSQL using the `load_data.py` script:
   ```bash
   python load_data.py
   ```

5. **Start the Application:**
   Run the application using uvicorn:
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000 --reload
   ```
   Replace the host's IP address.

6. **Start the Application:**
   ```bash
   npx expo start
   ```

7. **Access the Dashboard:**
   Open your Android Studio or scan the QR code on your phone Expo Go app.

