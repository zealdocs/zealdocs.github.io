# zealdocs.github.io / zealdocs.org

This repository contains source code the [Zeal][zeal] homepage.

## Development

To build this static site, you need the following dependencies:

- `jekyll` (`v3.1.6` from Ubuntu 18.04 works correctly)

To perform a one-off build, run:

```sh
jekyll build
```

To build any time a source code file changes and locally host the results at `http://127.0.0.1:4000/`, run:

```sh
jekyll serve
```

For more information on jekyll usage, see [the official jekyll documentation](https://jekyllrb.com/docs/usage/).

[zeal]: https://github.com/zealdocs/zeal
