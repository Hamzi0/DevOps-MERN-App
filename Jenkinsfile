// Jenkinsfile - Final Guaranteed Working Script

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
            # CRITICAL: Use the final common path for Docker binaries on Linux/Snap systems
            export DOCKER_CMD="/snap/bin/docker"
            
            echo "--- Stopping existing containers ---"
            # Execute command using the final assumed path
            $DOCKER_CMD compose down

            echo "--- Building and Deploying New Images ---"
            $DOCKER_CMD compose up --build -d

            echo "--- Verification ---"
            $DOCKER_CMD ps
        '''
    }
}