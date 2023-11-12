import { v4 as uuidv4 } from 'uuid';
import { IGuidService } from './IGuidService';

export class GuidService implements IGuidService {
	generateGuid(): string {
		return uuidv4();
	}
}
