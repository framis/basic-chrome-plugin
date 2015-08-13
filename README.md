Basic Chrome Plugin
===================

Example of a chrome plugin that submits a username and a password to an authentication window. Used for instance if you're using proxies.

# Install

- zip it
- add it to the extensions
- if using chrome with selenium
```
import org.openqa.selenium.chrome.ChromeOptions

ChromeOptions options = new ChromeOptions();
options.addExtensions(new File("path/to/extension/extension.zip"));
capabilities.setCapability(ChromeOptions.CAPABILITY, options);
```