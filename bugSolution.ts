function greet(person: string, date: Date): string {
  // Check if arguments are provided
  if (!person || !date) {
    return "Invalid input. Please provide a name and date.";
  }

  console.log(person, date);
  return `Hello, ${person}, today is ${date.toDateString()}.`;
}

greet("John Doe", new Date());
greet(undefined, new Date());
greet("John Doe", undefined);