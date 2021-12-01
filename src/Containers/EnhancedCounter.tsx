import { connect } from 'react-redux';
import { Counter } from '../components/Counter';
import { INCREMENT, DECREMENT } from "../action";

const mapDispatchToProps = (dispatch :any) => {
  return ({
    increment() {
      dispatch({type: INCREMENT});
    },
    decrement() {
      dispatch({type: DECREMENT});
    }
  })
};

const mapStateToProps = (state : any) => {
  return {
    Counter: state.Counter
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);