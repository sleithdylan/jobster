<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="./client/public/jobster-logo.svg" alt="Logo"  height="30">
  </a>
	<br />
	<br />
  <p align="center">
A web application to help you stay on top of your job applications.
  </p>
</div>

![Jobster](/client/public/jobster-github.png)

## 🚀 Quick start

Start running locally.

### Step 1: Clone the repo

To get started, clone the repo

```sh
git clone https://github.com/sleithdylan/jobster.git
```

### Step 2: Install Server & Client Dependencies

Type the following in the root of this project:

```sh
npm install
```

Now, change into the client directory and install the dependencies

```sh
cd client

yarn
# or
npm install
```

_**NOTE:** Be sure to cd back to the root of the project_

### Step 3: Setup .env

To connect mongodb & to setup JWT's in your local environment you will also need to provide the `.env` variables

- Create a new file .env in the root
- Open [.env.example](./.env.example)
- Copy the contents and paste it to the .env with valid keys

### Step 4: Run the project

Type the following in the root of this project:

```sh
npm run start
```
