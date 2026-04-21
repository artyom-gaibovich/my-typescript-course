const tickets: string[] = ['ticket1', 'ticket2', 'ticket3'];
const tickets2: Array<string> = ['ticket1', 'ticket2', 'ticket3'];


for (const ticket of tickets) {
    console.log(ticket.toUpperCase());
}

const filtedTickets = tickets.filter(t => !t.startsWith('ticket'));
const lengths = tickets.map(t => t.length);