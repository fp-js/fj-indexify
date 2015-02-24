import map from 'fj-map';


let indexify = (list) => {
  let index = 0;

  return map((item) => {
    return [index++, item];
  }, list);
};

export default indexify;
