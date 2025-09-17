import requests
import re

def fetch_token_readme():
    """Fetches the README.md content from the getblobs-token-list repository."""
    url = "https://raw.githubusercontent.com/naws-ai/getblobs-token-list/main/README.md"
    response = requests.get(url)
    response.raise_for_status()  # Raise an exception for bad status codes
    return response.text

def inject_token_list(readme_content):
    """Injects the token list into the support-tokens.md file."""
    placeholder = "<!-- TOKEN_LIST_PLACEHOLDER -->"
    target_file = "docs/introduction/support-tokens.md"

    with open(target_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add the token-list-container div around the fetched content
    injected_content = f'<div class="token-list-container">\n\n{readme_content}\n\n</div>'
    
    new_content = content.replace(placeholder, injected_content)

    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Successfully injected token list into {target_file}")

if __name__ == "__main__":
    print("Fetching latest token list from GitHub...")
    readme = fetch_token_readme()
    inject_token_list(readme)
