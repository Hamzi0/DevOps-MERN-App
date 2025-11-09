// Jenkinsfile - The Absolute Final Fix

node {
    // Define environment variables
    def gitUrl = 'https://github.com/Hamzi0/DevOps-MERN-App.git' 
    
    stage('Checkout Code') {
        echo 'Fetching latest code from GitHub...'
        git url: gitUrl, branch: 'main'
    }

    stage('Build and Deploy') {
        sh '''
            # CRITICAL FIX 1: Set the PATH variable.
            export PATH="/usr/bin:/usr/local/bin:/snap/bin:$PATH"
            
            # CRITICAL FIX 2: Create an alias for the V2 command using the V1 executable name.
            # This fixes the shell execution context problem.
            alias docker-compose='docker compose'
            
            echo "--- Stopping existing containers ---"
            # Use the alias (which is now the correct command)
            docker-compose down

            echo "--- Building and Deploying New Images ---"
            docker-compose up --build -d

            echo "--- Verification ---"
            docker ps
        '''
    }
}