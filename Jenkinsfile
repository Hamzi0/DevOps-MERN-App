// Jenkinsfile - Final Scripted Pipeline (PATH Fix)

node {
    // Define environment variables
    def gitUrl = 'https://github.com/Hamzi0/DevOps-MERN-App.git' 
    
    stage('Checkout Code') {
        echo 'Fetching latest code from GitHub...'
        // Fetches code into the workspace
        git url: gitUrl, branch: 'main'
    }

    stage('Build and Deploy') {
        // Run all shell commands in one block for reliability.
        sh '''
            # CRITICAL FIX: Set the PATH to include all common locations for Docker.
            export PATH="/usr/bin:/usr/local/bin:/snap/bin:$PATH"
            
            echo "--- Stopping existing containers ---"
            # Now the 'docker' command will be found via the updated PATH
            docker compose down

            echo "--- Building and Deploying New Images ---"
            docker compose up --build -d

            echo "--- Verification ---"
            docker ps
        '''
    }
}