import SummaryStack from 'src/navigation/summaryStackNavigator/SummaryStackNavigator';
import BodyWeightStack from 'src/navigation/bodyWeightNavigator/BodyWeightStackNavigator'

const Screens = {
  SUMMARY: {
    title:'Summary', 
    component:SummaryStack},
  BODYWEIGHT: {
     title: 'Body weight', 
     component: BodyWeightStack },
  YOURGOALS: {
    title:'Your goals'},
  RECIPES: {
    title:'Recipes'},
  SETTINGS: {
    title:'Settings'},
  HELP: {
    title:'Help'},
  LOGOUT: {
    title:'Logout'}
}

export default Screens
