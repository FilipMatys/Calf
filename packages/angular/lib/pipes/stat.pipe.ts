// External modules
import { PipeTransform } from "@angular/core";

// Services
import { StatService } from "../services/stat.service";

// Stat pipe mode
type StatPipeMode = "icon" | "label" | "description" | "color";

/**
 * Abstract Stat pipe
 */
export abstract class StatPipe<T> implements PipeTransform {

    // Service
    protected abstract service: StatService<T>;

    /**
     * Transform value
     * @param value 
     * @param mode 
     * @returns 
     */
    public transform(value: any, mode: StatPipeMode = "label"): string {
        // Check mode
        switch (mode) {
            // Description
            case "description":
                // Get description
                return this.service.getDescription(value);

            // Icon
            case "icon":
                // Get icon
                return this.service.getIcon(value);

            // Color
            case "color":
                // Get color
                return this.service.getColor(value);

            // Label
            case "label":
            default:
                // Get label
                return this.service.getLabel(value);
        }
    }
}