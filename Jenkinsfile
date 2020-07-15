pipeline {
    agent any
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