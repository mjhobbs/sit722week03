# SIT722 Week03 Test Project

In order to use the boilerplate you will need NodeJS to be installed on your system.

## Setup and Run

- Step 1: Git clone the application

```
$ git clone https://github.com/mjhobbs/sit722week03.git

$ cd sit722week03
```

- Step 2: Install node modules

```
$ npm install
```

- Step 3: Start the application

```
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Contributing

- Pull the latest changes from development branch

```
git pull
```

- Create new branch from development branch

```
git checkout –b branch-type/branch-name    (such as feature/feature-name or hotfix/hotfix-name)
```

- Make changes 
- Commit the changes (repeat until you are done developing)

```
git add .   
git commit  -m 'Meaningful message'

```

- Push changes

```
git push --set-upstream origin branch-type/branch-name 
```

Or

```
git push
```

- Create a pull request (describe changes made and upload screenshots if helpful)
- Fix any merge conflicts
- Ask another team member to review and approve the pull request

Note: If you first time push new changes from new branch, run

```
git push --set-upstream origin branch-type/branch-name
```

### If you are adding a new change on the current branch you have created

- Go back to development branch

```
git checkout development
```

- Pull the latest changes

```
git pull 
```

- Go back to the branch you are working on 

```
git checkout branch-type/branch-name (such as feature/feature-name or hotfix/hotfix-name)
```

- Merge last changes from other people and start your work

```
git merge development
```

- Fix any merge conflicts

Note: If you use GitHub tools to manage the branch. Always pull and merge last version to the branch you want to work on before starting your work

