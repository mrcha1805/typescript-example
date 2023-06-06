namespace genericsExample {
  interface Person {
    id: number;
    name: string;
    birthDate?: Date;
  }

  interface Player {
    id: string;
    name: string;
    level: number;
  }

  interface User {
    id: number;
    name: string;
    email: string;
  }

  interface FindOptions<IdValue, NameValue> {
    id?: IdValue;
    name?: NameValue;
  }

  function findData<Data extends { id: any; name: any }, IdValue, NameValue>(
    persons: Data[],
    findOptions: FindOptions<IdValue, NameValue>
  ): Data | undefined {
    for (const person of persons) {
      if (findOptions.id && findOptions.name) {
        if (findOptions.id === person.id && findOptions.name === person.name) {
          return person;
        }
      } else {
        if (findOptions.id && findOptions.id === person.id) {
          return person;
        }
        if (findOptions.name && findOptions.name === person.name) {
          return person;
        }
      }
    }
  }

  const data: Person[] = [
    { id: 1, name: "John Doe", birthDate: new Date("1999-01-03") },
    { id: 2, name: "Joe Dan" },
    { id: 3, name: "John Doe" },
    { id: 4, name: "Jane Dee" },
  ];
  console.log(findData<Person, number, string>(data, { id: 2 }));
  console.log(findData<Person, number, string>(data, { name: "Joe Dan" }));
  console.log(
    findData<Person, number, string>(data, { name: "John Doe", id: 3 })
  );

  const dataPlayer: Player[] = [
    { id: "ab-01", name: "John", level: 2 },
    { id: "ab-02", name: "Joe", level: 1 },
    { id: "ab-03", name: "Jane", level: 22 },
    { id: "ab-04", name: "Joe", level: 56 },
  ];
  console.log(findData<Player, string, string>(dataPlayer, { id: "ab-03" }));

  const dataUser: User[] = [
    { id: 1, name: "a", email: "a@example.com" },
    { id: 2, name: "b", email: "b@example.com" },
  ];
  console.log(findData<User, number, string>(dataUser, { id: 2 }));
}
