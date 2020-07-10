pipeline {
    agent none
    stages {
        stage('HelloWorld') {
            steps {
                sh "docker build ."
            }
        }
        stage('test') {
            steps {
                echo "hello"
            }
        }
    }
}