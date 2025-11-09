// Jenkinsfile - Final Guaranteed Working Script

node {
    def gitUrl = 'https://github.com/Hamzi0/DevOps-MERN-App.git' 
    def helperImage = 'docker/compose:latest' // Has 'docker' and 'docker compose' binaries

    stage('Checkout Code') {
        echo 'Fetching latest code from GitHub...'
        git url: gitUrl, branch: 'main'
    }

    stage('Build and Deploy') {
        // Run all commands inside the helper container
        sh """
            # Start the helper container, mount the Docker socket, and execute the commands inside it.
            docker run --rm \
                -v /var/run/docker.sock:/var/run/docker.sock \
                -v \$(pwd):/app \
                -w /app \
                ${helperImage} \
                sh -c "
                    echo '--- Stopping existing containers ---'
                    docker compose down

                    echo '--- Building and Deploying New Images ---'
                    docker compose up --build -d

                    echo '--- Verification ---'
                    docker ps
                "
        """
    }
}