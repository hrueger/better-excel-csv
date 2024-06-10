# Better CSV Export
> For Usage with the P-Touch Editor Software on MacOS since Excel databases are only available on Windows.

## Usage
- Create a `better-excel-csv.config.json` file in a directory with the following content:
```json
{
    "input": "example.xlsx",
    "outputs": [
        {
            "sheet": "Sheet1",
            "file": "Export_Filename_Sheet1.csv"
        },
        {
            "sheet": "Sheet2",
            "file": "Export_Filename_Sheet2.csv"
        }
    ],
    "options": {
        "delimiter": ",",
        "header": true,
        "encoding": "utf8"
    }
}
```

- Run `npx better-excel-csv` to export the sheets to the specified files.
> [!WARNING]
> This overwrites existing files without asking for confirmation.

- For easier access, you can copy [this file](./export-csv.command) to that folder, make it executable with `chmod +x export-csv.command` and run it directly with a double click from your Finder.

## License
MIT