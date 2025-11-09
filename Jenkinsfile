// Since this is a Pipeline script, it will execute with Groovy syntax
node {
    // Define environment variables
    def gitUrl = 'https://github.com/Hamzi0/DevOps-MERN-App.git' 
    
    stage('Checkout Code') {
        echo 'Fetching latest code from GitHub...'
        // Fetches code into the workspace
        git url: gitUrl, branch: 'main'
    }

    stage('Build and Deploy') {
        // Run all shell commands in one block. This is the most stable method.
        sh '''
            echo "--- Stopping existing containers ---"
            # Use the absolute path for the Docker binary (/usr/bin/docker) to bypass PATH issues
            /usr/bin/docker compose down

            echo "--- Building and Deploying New Images ---"
            /usr/bin/docker compose up --build -d

            echo "--- Verification ---"
            /usr/bin/docker ps
        '''
    }
}