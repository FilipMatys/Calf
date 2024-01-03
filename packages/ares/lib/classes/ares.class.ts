// Services
import { EconomicSubjectsService } from "../services/economic-subjects.service";

/**
 * ARES
 * @description ARES client
 */
export abstract class ARES {

    // Singleton
    private constructor() {}

    /**
     * Economic subjects
     * @description Service for Economic subjects
     */
    public static readonly EconomicSubjects: EconomicSubjectsService = new EconomicSubjectsService();
}