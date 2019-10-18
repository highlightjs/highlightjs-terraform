# Highlightjs-Terraform

## Usage

* Three files are required.

    -  A style `.css` file.

    - The `highlight.pack.js` file.

    - The `terraform.js` file located in this repository.

### Steps

1. Clone this repository to your localhost using the following command: `git clone git@github.com:highlightjs/highlightjs-terraform.git`.

2. Head to the [Highlightjs download page](https://highlightjs.org/download/).

3. Under the heading **Custom package**, **Click** download.

4. Extract the downloaded `.zip` file.

5. In the extracted `.zip` file, choose a `.css` style in `./styles` and copy it to your project.

6. In the extracted `.zip` file, copy the `highlight.pack.js` file to your project.

7. From this repo, copy the `terraform.js` file to your project.

8. Add the following lines to your website's `<head>` tag:

    ```html
    <link rel="stylesheet" href="/path/to/style.css">
    <script type="text/javascript" src="/path/to/highlight.pack.js"></script>
    <script type="text/javascript" src="/path/to/terraform.js"></script>
    <script type="text/javascript">
        hljs.registerLanguage('terraform', window.hljsDefineTerraform);
        hljs.initHighlightingOnLoad();
    </script>
    ```

That's it! Write some terraform code within `<pre><code class="tf">Some terraform code here!</code></pre>` and behold, your coloured terraform code.