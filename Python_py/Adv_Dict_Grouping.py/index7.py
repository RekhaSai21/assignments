logs = [
    'ERROR: Disk full',
    ' INFO : Server started ',
    'ERROR: Timeout',
    'WARN: High memory',
    'INFO: Request received'
]

result = {}

for log in logs:
    level, message = log.split(':', 1)

    level = level.strip()
    message = message.strip()

    if level not in result:
        result[level] = []

    result[level].append(message)

print(result)