import spy from '../../static/spy.jpg';
import pyro from '../../static/pyro.jpg';
import medic from '../../static/medic.jpg';
import engineer from '../../static/engineer.jpg';
import heavy from '../../static/heavy.jpg';
import demo from '../../static/demo.jpg';
import scout from '../../static/scout.jpg';
import soldier from '../../static/soldier.jpg';
import sniper from '../../static/sniper.jpg';

const determineImage = name => {
  switch (name) {
    case 'spy':
      return spy;
    case 'pyro':
      return pyro;
    case 'medic':
      return medic;
    case 'engineer':
      return engineer;
    case 'heavy':
      return heavy;
    case 'demo':
      return demo;
    case 'scout':
      return scout;
    case 'soldier':
      return soldier;
    case 'sniper':
      return sniper;
    default:
      return 'No class selected';
  }
};

export default determineImage;
