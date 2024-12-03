# Git Bisect for tracing changes

**Official Git Docs**: https://git-scm.com/docs/git-bisect

Use binary search to find the commit that introduced a bug/new functionality.

![diagram of git bisect flow](https://remimercier.com/media/2021/10/remi-mercier-how-to-use-git-bisect-02.jpg)

## Commands

1. `git bisect start` - begin the bisect process
2. `git bisect bad` - mark current commit as "bad"
3. `git bisect good [branch|commit]` - mark a good commit
4. Git will automatically choose a commit in the middle of the range and check it out for you. 
5. Mark this new state with `git bisect bad` or `git bisect good` and Git will update the range automatically and check out a new commit for you
6. Keep repeating step 5 until git tells you the bad commit.
7. `git bisect reset` - end the process and return to the original commit before `git bisect start`
    - if you forget to do this and run other Git commands, you will run into errors

Can also use `git bisect run shell-script.sh` to further automate the tracing process where `shell-script.sh` exits with code 0 (success) or some other code like 1 (error) to mark commits as good/bad.

## Appendix

Depending on the type of bug and the complexity of the related feature, `git bisect` might not be necessary. If the context is obvious, `git blame`, looking through PRs on GitHub, or even checking Sentry telemetry to find the first occurrence of a related error in test environments may be more efficient in tracing the origin.

If there are many moving parts and/or a lot of commits/time has elapsed between a "good" and the "bad" state, then `git bisect` is a handy asset to know.

## Creating commits 111111111111111111