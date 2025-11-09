// Jenkinsfile - Final Scripted Pipeline (Full Path Fix)

node {
    // Define environment variables
    def gitUrl = 'https://github.com/Hamzi0/DevOps-MERN-App.git' 
    
    stage('Checkout Code') {
        echo 'Fetching latest code from GitHub...'
        // Fetches code into the workspace
        git url: gitUrl, branch: 'main'
    }

    stage('Build and Deploy') {
        // Run all commands in a single shell block for maximum compatibility.
        sh '''
            echo "--- Stopping existing containers ---"
            # Use the full path for the Docker binary to bypass the PATH issue.
            /usr/bin/docker compose down

            echo "--- Building and Deploying New Images ---"
            # Build and deploy the entire stack using the new code
            /usr/bin/docker compose up --build -d

            echo "--- Verification ---"
            /usr/bin/docker ps
        '''
    }
}