# Example configuration to automatically create a server with an app, a database and ci/cd using ansible, docker-compose and github actions

Uses docker-compose, if app gets popular look into kubernetes or something

## Requirements before starting

All examples use Ubuntu

### A server with an ssh key

- Use a vps provider (ex digitalocean or hetzner)

- Create a server

- Use ssh as login

- Use a public key

Multiple instructions exist. "Google create ssh key"

### Install ansible

`sudo apt-add-repository ppa:ansible/ansible`

`sudo apt update`

`sudo apt install ansible`

### Configure ansible

Edit inventory

`sudo nano ansible/initialize/inventory`

Replace `<<IP_ADDRESS_OF_SERVER_TO_USE>>` with ip address of server to use

Edit user to create

`sudo nano ansible/initialize/vars/default.yml`

Replace `ronttonen` with desired username

## How to use

### Initialize server

Create a local .env file based on .env.example in root of project.

Run command:

`./init.sh`

If command is not executable first run

`sudo chmod +x init.sh`

### Set variables in github actions

https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets

Required variables:
- SSH_HOST=<<ip_of_remote>>
- SSH_USERNAME=ronttonen
- SSH_KEY=<<ssh_private_key_content>>
- ACCESS_TOKEN=<<personal_access_token_with_full_control_of_private_repositories>> (https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)
