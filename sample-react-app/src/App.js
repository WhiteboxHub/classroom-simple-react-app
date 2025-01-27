import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentList from './components/Sqlenddata.js/SubjectList';
import CourseList from './components/Sqlenddata.js/SubjectList';
import SubjectList from './components/Sqlenddata.js/SubjectList';
import PlacedStudent from './components/NoSqlenddata/PlacedStudents';
import Presentation from './components/presentations/page';
import Footer from './components/common/footer';
import Header from './components/common/Header';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/students" component={StudentList} />
          <Route path="/courses" component={CourseList} />
          <Route path="/subjects" component={SubjectList} />
          <Route path="/placed-students" component={PlacedStudent} />
          <Route path="/presentations" component={Presentation} />
          <Route path="/" exact>
            <h1>Welcome to the Whitebox-Learningeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
