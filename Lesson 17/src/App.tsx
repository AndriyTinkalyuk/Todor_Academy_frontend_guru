import ItemListContainer from './component/ItemList/ItemListContainer';
import TextInputFormParent from './component/TextInputForm/TextInputFormParent';

const items = [
  { id: '1', name: 'Банан' },
  { id: '2', name: 'Книга' },
  { id: '3', name: 'Ноутбук' },
  { id: '4', name: 'Пляшка води' },
  { id: '5', name: 'Планшет' },
  { id: '6', name: 'Гітара' },
  { id: '7', name: 'Футболка' },
  { id: '8', name: 'Навушники' },
  { id: '9', name: 'Парасолька' },
  { id: '10', name: 'Олівець' }
];




const App = () => {
  return (
    <div>
      <TextInputFormParent />
      <ItemListContainer items={items} />
    </div>
  );
};

export default App;