// Jenkinsfile - Final Scripted Pipeline (Adjusted Command)

node {
    // Define environment variables
    def gitUrl = 'https://github.com/Hamzi0/DevOps-MERN-App.git' 
    
    stage('Checkout Code') {
        echo 'Fetching latest code from GitHub...'
        git url: gitUrl, branch: 'main'
    }

    stage('Build and Deploy') {
        // Run all shell commands in one block.
        sh '''
            # CRITICAL FIX: Set the PATH to include all common locations for Docker.
            # This is necessary because the Jenkins shell's PATH is incomplete.
            export PATH="/usr/bin:/usr/local/bin:/snap/bin:$PATH"
            
            echo "--- Stopping existing containers ---"
            # Switch to the older 'docker-compose' syntax for better PATH stability
            docker-compose down

            echo "--- Building and Deploying New Images ---"
            docker-compose up --build -d

            echo "--- Verification ---"
            # Use the simple 'docker' command for universal checking
            docker ps
        '''
    }
}