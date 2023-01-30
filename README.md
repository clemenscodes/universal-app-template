# Universal Application Template

This is a template repository for a scalable and universal application using ```React Native```, ```Next.js``` and ```TailwindCSS``` along with ```Jest```, ```Cypress``` and ```Storybook``` preconfigured. The project consists of a landing page and demo ```Solito``` app. All components are cross platform. For the native mobile app, ```Expo Router``` is used.

Additionally, a custom ```Rust``` server using ```Axum```, ```gRPC``` libraries, ```Tauri``` desktop support and a ```Docusaurus``` app are also included.

There are some helper scripts and tooling utilities configured in ```package.json``` and ```tools/scripts``` to test the workspace or add new features.

The project also uses ```husky``` commit hooks with ```cz-git```.

```TypeScript``` is used in all projects.

## Requirements

To setup this project, following dependencies will be needed:

- Linux based operating system (or WSL on Windows)
- Node.js 16
- Rust 1.59 or higher
- Tauri CLI (installed via ```cargo install tauri-cli```)
- Protocol Buffers Compiler and Protocol Buffers resource files
- Docker buildx engine (for deployments)

## Installation

With the required dependencies setup, simply run:

```sh
yarn
```

For convenience, installing ```nx``` globally using ```npm``` is recommended:

```sh
npm i -g nx
```

Afterwards, the project is fully manageable using the ```nx``` CLI.

### NxCloud

Usage of NxCloud and its distributed caching, task execution and code generation is highly recommended.

```sh
nx connect
```

Then add the following cacheable operations to tasksRunnerOptions.default.options.cacheableOperations in ```nx.json```:

```json
{
    "tasksRunnerOptions": {
        "default": {
            "runner": "@nrwl/nx-cloud",
            "options": {
                "cacheableOperations": [
                    "lint",
                    "build",
                    "export",
                    "test",
                    "e2e",
                    "docker",
                    "firebase",
                    "codegen",
                    "test-codegen"
                ],
                "accessToken": "<YOUR_ACCESS_TOKEN>"
            }
        }
    }
}
```

## Running

```sh
nx start web-landing  # run the landing page app
nx start web-demo     # run the demo solito app
nx start mobile-demo  # run the native app
nx start desktop-demo # run the demo app natively using tauri 
nx start api          # run the rust axum api
nx start docs         # run the docusaurus app
```

## Developing

There are two helper scripts which can generate a new component or page in the ```libs/shared``` library.

```sh
yarn component login-button
```

This will generate the ```LoginButton``` component as ```libs/shared/src/components/login-button/login-button.tsx``` along with ```Jest``` and ```Storybook``` test files and export it from the shared library.

Afterwards, you can use the component in all your apps by importing it with:

```ts
import { LoginButton } from '@shared';
```

### Semantic Versioning

When committing, you will get a prompt which will generate conventional commits and lint the commits using ```commitlint```.

Additionally, a target to generate the ```CHANGELOG.md``` and calculate a new version based on the conventional commits can be run with:

```sh
yarn bump
```

## Testing

The following scripts help to test the workspace and take the amount of cores to use as an optional argument:

```sh
yarn format  # format the entire workspace
yarn full 8  # test all targets
yarn ci 8    # test only affected targets
yarn debug 8 # test only failed targets
```

### Storybook

```sh
nx start sb-web-demo    # run storybook for demo app
nx start sb-web-landing # run storybook for landing page app
nx start sb-web-shared  # run storybook for shared components
nx start sb-mobile      # run storybook on mobile for all components
```

### Cypress

```sh
nx e2e e2e-web-demo    # run cypress for demo app
nx e2e e2e-web-landing # run cypress for landing page app
nx e2e e2e-mobile-demo # run detox for mobile (needs configuration)
```

## Deployment

By default, the pipeline only runs a setup job. Uncomment the remaining jobs in ```.github/workflows/ci.yml``` to activate it.

The pipeline uses NxCloud Distributed Task Execution, so NxCloud usage is required and highly recommended.

The CI/CD pipeline deploys the landing page to ```Firebase Hosting``` and the demo app to ```Google Cloud Run```, if the ```firebase.sh``` and ```deploy.sh``` scripts in the corresponding projects are adjusted according to the Google projects.

For the demo app, the CI will copy a standalone Next.js server in a ```Docker``` image, push the image to ```Google Artifact Registry``` and deploy the image with ```Google Cloud Run```. Afterwards, a cleanup job is run which deletes all images except for the most recent 5 images to stay in the free tier usage of the artifact registry. Currently the Docker image takes about 63 MB in the registry.

On pull requests, apps get deployed to development projects and after a merge to the main branch, the apps get built for all platforms (Windows, MacOS, Linux) and released using semantic versioning and deployed to production.

Repository secrets ```GCP_SA_KEY``` for the Google service account with correct permissions and ```REPO_GITHUB_TOKEN``` with write permissions to the repository are required for the pipeline.

To scale the CI horizontally, simply update the ```NX_CLOUD_DISTRIBUTED_EXECUTION_AGENT_COUNT``` environment variable in ```.github/workflows/ci.yml``` to the required amount of agents.

If you do not want to deploy the applications, remove the deployment job from the workflow and update the cleanup job to need the release job instead.
