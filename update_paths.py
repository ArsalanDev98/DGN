import os
import re

# Define the root directory to search for files
root_dir = 'src'

# Define the pattern to search for relative paths
pattern = re.compile(r'(\.\.\/)+assets')

# Define the new path
new_path = '/assets'

# Walk through all files in the root directory
for subdir, _, files in os.walk(root_dir):
    for file in files:
        # Only process .js, .jsx, .ts, .tsx files
        if file.endswith(('.js', '.jsx', '.ts', '.tsx', 'css')):
            file_path = os.path.join(subdir, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Replace the pattern
            new_content = pattern.sub(new_path, content)

            # Write the changes back to the file
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)

print("Update complete!")
