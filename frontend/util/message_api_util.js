export const createMessage = message => (
	$.ajax({
		method: 'POST',
		url: '/api/messages',
		dataType: "json",
		data: message
	})
);

export const fetchMessage = id => (
	$.ajax({
		method: 'GET',
		url: `api/messages/${id}`
	})
);

export const fetchMessages = query => {
	return $.ajax({
		method: 'GET',
		url: `api/messages`,
	});
};


export const deleteMessage = id => (
	$.ajax({
		method: 'DELETE',
		url: `api/messages/${id}`
	})
);