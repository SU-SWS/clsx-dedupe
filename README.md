# [CLSX Dedupe](https://github.com/SU-SWS/clsx-dedupe)


Maintainers: [sherakama](https://github.com/sherakama)  

Description
---

A wrapper around https://npmjs.org/package/clsx to dedupe and reduce arguments.

Installation
---

`npm install clsx-dedupe --save-dev`

Then

```
import { clsxd } from 'clsx-dedupe'

const classnames = clsxd('one', ['two', 'three'], {'four': true})
```

Configuration
---

Nothing special needed.


Troubleshooting
---

If you are experiencing issues with this module try reverting the feature first. If you are still experiencing issues try posting an issue on the GitHub issues page.

Developer
---

If you wish to develop on this module you will most likely need to compile some new css. Please use the sass structure provided and compile with the sass compiler packaged in this module. To install:

```
nvm use
npm install
npm run build
```

Contribution / Collaboration
---

You are welcome to contribute functionality, bug fixes, or documentation to this module. If you would like to suggest a fix or new functionality you may add a new issue to the GitHub issue queue or you may fork this repository and submit a pull request. For more help please see [GitHub's article on fork, branch, and pull requests](https://help.github.com/articles/using-pull-requests)
