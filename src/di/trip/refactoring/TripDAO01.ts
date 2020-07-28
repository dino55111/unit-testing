import CollaboratorCallException from '../../exception/CollaboratorCallException';
import { User } from '../../user/refactoring/User01';
import Trip from '../../trip/Trip';

export default class TripDAO {
  public static findTripsByUser(user: User): Trip[] {
    throw new CollaboratorCallException('TripDAO should not be invoked on an unit test.');
  }
}
