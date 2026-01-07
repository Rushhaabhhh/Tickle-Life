"use client";

import "./globals.css";
import "./style.css";
import "./coin.css";



                {pathname === "/" ? (
                  <ScrollControls pages={3} damping={0.2}>
                    <Experience
                      triggerExplosion={triggerExplosion}
                      active={active}
                      onHeartClick={handleExplosion}
                      isLoaded={isLoaded}
                    />
                  </ScrollControls>
                ) : (
                  <Experience2 active={active} triggerExplosion={false} isLoaded={isLoaded} />
                )}
              </Suspense>
            </Canvas>
          </div>

          {pathname === "/" && (
            <>
              <HeroText active={active} onExplosion={handleExplosion} />
              <TabletForm
                triggerExplosion={triggerExplosion}
                trigger={triggerExplosion}
                formRef={undefined}
              />
            </>
          )}

          {children}
        </main>
      </body>
    </html>
  );
}
