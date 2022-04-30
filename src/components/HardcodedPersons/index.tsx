import { useMemo } from 'react';
import Button from '../Button';
import { Body1, Flex } from '../Layout';

interface Person {
  name: string;
  email: string;
  password: string;
}

interface Props {
  onSelectPerson: (person: Person) => void;
}

const genericPassword = 'Password1';

const HardcodedPersons = ({ onSelectPerson }: Props) => {
  const persons = useMemo<Person[]>(
    () => [
      {
        name: 'Scott',
        email: 'scottR@yopmail.com',
        password: genericPassword,
      },
      {
        name: 'Maggie',
        email: 'maggieR@yopmail.com',
        password: genericPassword,
      },
      {
        name: 'Luna',
        email: 'lunaR@yopmail.com',
        password: genericPassword,
      },
    ],
    []
  );

  return (
    <Flex direction='column' align='center' css={{ mt: '$16' }}>
      <Body1 css={{ color: '$whiteA12' }}>Iniciar sesión como</Body1>
      <Flex css={{ pt: '$16' }}>
        {persons.map((person, index) => (
          <Flex key={index} css={{ flex: 1, mh: index === 1 ? '$16' : '$0' }}>
            <Button
              full
              text={person.name}
              variant='outlined'
              onPress={() => onSelectPerson(person)}
            />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default HardcodedPersons;
