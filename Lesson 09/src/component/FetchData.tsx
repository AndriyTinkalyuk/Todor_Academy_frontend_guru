import * as React from 'react';

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface FetchDataProps {
  data: IUser[]
}

export default class FetchData extends React.Component<{}, FetchDataProps> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: []
    }
  }

  async componentDidMount(): Promise<void> {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      this.setState({ data })
    } catch (error) {
      throw new Error("Помилка при отриманні даних" + error)
    }
  }

  render() {
    return (
      <div>
        <h2>Users:</h2>
        <ul>
          {this.state.data.map(user => (
            <li key={user.id}>
              {user.name}, phone: {user.phone}
            </li>)
          )}
        </ul>
      </div>
    );
  }
}