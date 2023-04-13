let commandStarts = (message, prefix) => {
	return message == prefix || message.startsWith(prefix + ' ')
}
