const oldData = [
    {code: 'ab', name: 'Son môi'},
    {code: 'ac', name: 'Sữa rữa mặt'},
    {code: 'null', name: 'null'},
    {code: 'null', name: ''},
];

const parsrArraytoObject = ({array = [], keyId = ''}) => {
    return Object.fromEntries(
        array?.map(item => [keyId ? item?.[keyId] : item, item]) || []
    );
};
const newData = parsrArraytoObject({array: oldData, keyId: 'code'});
console.log(newData);

const filterObject = (obj) => {
    Object.keys(obj).forEach((key) => {
      if (!obj[key] || obj[key].code === 'null' || obj[key].name === '') {
        delete obj[key];
      }
    });
    return obj;
  };
  const filteredOutput = filterObject(newData);
console.log(filteredOutput['ab']);