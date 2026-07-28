import { useRef } from "react";
import { site } from "@/content";
import { useClock } from "@/hooks/useClock";
import { usePointerTilt } from "@/hooks/usePointerTilt";
import { Icon } from "@/components/ui/Icon";
import { LockScreen } from "./screens/LockScreen";
import { ProjectsScreen } from "./screens/ProjectsScreen";
import { CareerScreen } from "./screens/CareerScreen";
import { SkillsScreen } from "./screens/SkillsScreen";
import { ChatScreen } from "./screens/ChatScreen";
import styles from "./Phone.module.css";

interface PhoneProps {
  activeSection: string;
}

/**
 * The companion device. Sits sticky next to the content and mirrors
 * whatever section the visitor is reading. Every item on it is
 * pressable and answers on the page.
 */
export function Phone({ activeSection }: PhoneProps) {
  const deviceRef = useRef<HTMLDivElement>(null);
  usePointerTilt(deviceRef);
  const { time } = useClock();

  const screen = (id: string, node: React.ReactNode) => (
    <div className={`${styles.screenView} ${activeSection === id ? styles.on : ""}`}>{node}</div>
  );

  return (
    <aside className={styles.rail}>
      <div className={styles.sticky}>
        <div className={styles.device} ref={deviceRef}>
          <div className={styles.screen}>
            <div className={styles.statusBar}>
              <span className={styles.carrier}>{site.domain}</span>
              <span>{time}</span>
              <span className={styles.statusRight}>
                <Icon name="signal" size={15} />
                <span className={styles.battery}>
                  <i />
                </span>
              </span>
            </div>

            {screen("hero", <LockScreen />)}
            {screen("projects", <ProjectsScreen />)}
            {screen("experience", <CareerScreen />)}
            {screen("skills", <SkillsScreen />)}
            {screen("contact", <ChatScreen />)}
          </div>
        </div>
      </div>
    </aside>
  );
}
