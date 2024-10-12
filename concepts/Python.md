## Competitive Snippets

### Round towards zero in integer division

    # Do floating point division then convert to an int.
    int(-1 / 2)

    int(float(-1) / 2)
    
### Check if List is empty

    a = []
    if not a:
        print("List is empty")
    
### Convert List to String

    xs = ['1', '2', '3']
    s = ''.join(xs)

    xs = [1, 2, 3]
    s = ''.join(str(x) for x in xs)
    
## Advanced

### Virtual Env

    pip install virtualenv
    
    python -m venv venv
    source venv/bin/activate

### Reloading Modules

    import importlib
    importlib.reload(module)