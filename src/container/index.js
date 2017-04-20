import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { inc, dec} from '../action';
import Counter from '../components/Counter.js';

//建立一个从外部state对象到UI组建props对的映射关系
const mapStateToProps = state =>({state});
//用来建立UI组件的参数到store.dispatch方法的映射，定义用户操作的action
const mapDispatchToProps = dispatch => bindActionCreators({inc,dec},dispatch);
//用于UI生成容器组件
const App = connect(mapStateToProps,mapDispatchToProps)(Counter);
export default App;
