<font color="#f79646">Deployed Link -</font> https://coderrr.vercel.app/
<font color="#f79646">github Repository link -</font> [Coderrr](https://github.com/yashkumar2603/Coderrr)

**Collaborative IDE with Real-Time Code Sync and Execution**

This innovative Integrated Development Environment (IDE) is designed to enhance team productivity by enabling real-time code collaboration and execution. It allows multiple users to simultaneously edit and sync code within a shared workspace, offering seamless integration of essential coding and testing features.
### Key Features

1. **Real-Time Code Sync:** Multiple users can edit and view code changes in real time, fostering a collaborative environment.
    
2. **Integrated Code Running:** Supports code execution and testing for all major programming languages, ensuring quick validation and debugging.
    
3. **WebSockets for Synchronization:** Uses WebSockets for efficient real-time data synchronization, providing a smooth collaborative experience.
    
4. **Piston API for Code Execution:** Leverages the Piston API to execute code, ensuring fast and reliable results.
    
5. **ReactJS Frontend:** Built with ReactJS for a responsive and intuitive user interface.
    
6. **User Activity Notifications:** Displays non-intrusive pop-up messages when users join or leave the workspace, keeping team members informed without disruption.

### Use Case

**Team Collaboration on Coding Projects**

In modern software development, teamwork and rapid iteration are crucial. This IDE addresses the need for real-time collaboration by allowing developers to work together on the same codebase from different locations. It eliminates the friction of manual code merging and synchronizing, enabling immediate sharing of ideas and solutions.

**Typical Scenario:**

- **Distributed Development Teams:** Remote teams can collaborate in real-time on coding tasks, enhancing communication and productivity.
    
- **Pair Programming:** Facilitates pair programming by allowing both programmers to see and edit code simultaneously, even if they are not in the same physical location.
    
- **Code Reviews:** Simplifies the code review process by allowing reviewers to make live edits and comments, reducing feedback loops and accelerating project timelines.

**Benefits:**

- **Enhanced Collaboration:** Reduces barriers to teamwork, making it easier to solve problems collectively and implement changes instantly.
    
- **Increased Efficiency:** Streamlines the coding and testing process, leading to faster development cycles and reduced time-to-market.
    
- **Improved Communication:** Keeps team members in sync with real-time updates and notifications, minimizing misunderstandings and redundant work.

This collaborative IDE is a powerful tool for any development team looking to improve their workflow and achieve greater synergy in their coding efforts.

## High level Overview of Codebase - 
**Folder Structure**
```
Client Side Folder structure

client
├── components
│   ├── Editor.js
│   ├── EditorPage.js
│   ├── Home.css
│   ├── Home.js
│   ├── LanguageSelector.js
│   └── Socket.js
├── env
│   └── .gitignore
├── index.css
├── index.js
├── package-json
├── package-lock.json
├── README.md
|── reportWebVitals.js
```

```
Server side folder Structure(Deployed Separately)

├── server
│   ├── Actions.js
│   ├── index.js
│   ├── package-json
│   └── package-lock.json
├── setupTests.js
├── .gitignore
└── node_modules
```

##### Packages used - 
**Client-side ("client" folder):**

- **React & React Ecosystem:**
    - `react`, `react-dom`: Core React library for building the user interface.
    - `react-router-dom`: Enables routing for different views within the application.
- **Data fetching & Networking:**
    - `axios`: Makes HTTP requests to the server for data communication.
- **UI Components:**
    - `codemirror`: Enables code editing functionality within the IDE.
    - `react-avatar`: Allows displaying user avatars.
    - `react-hot-toast`: Used for displaying notifications to the user.
- **Real-time Communication:**
    - `socket.io-client`: Enables real-time communication between the client and server for collaborative editing.
- **Other Utilities:**
    - `uuid`: Generates unique identifiers for various purposes.

**Server-side ("server" folder):**

- **Node.js Ecosystem:**
    - `express`: Web framework for building the server-side application.
    - `fs`: Provides file system access functionalities.
    - `https`: Enables secure communication between the server and client.
    - `nodemon`: Development only tool that automatically restarts the server on code changes.
- **Real-time Communication:**
    - `socket.io`: Enables real-time communication between the server and multiple clients for collaborative editing.

## Usage - 
If you want to run Coderrr locally, follow these steps: 
Check out the deployed link here - [New tab (coderrr.vercel.app)](https://coderrr.vercel.app/)

1. Clone the repository:

   ```bash
   git clone https://github.com/yashkumar2603/Coderrr.git
   cd Coderrr
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
