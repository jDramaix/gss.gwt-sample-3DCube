/*
 * Copyright 2013 Julien Dramaix
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

package jdramaix.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.DivElement;
import com.google.gwt.dom.client.Document;
import com.google.gwt.query.client.Function;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;

import static com.google.gwt.query.client.GQuery.$;

public class Cube extends Composite {
  interface CubeUiBinder extends UiBinder<Widget, Cube> {
  }

  private static final int KEY_DOWN_ROTATION_ANGLE = 45;
  private static CubeUiBinder uiBinder = GWT.create(CubeUiBinder.class);
  private static CubeResources resources = GWT.create(CubeResources.class);

  @UiField
  DivElement cube;

  private int yAngle = 20;
  private int xAngle = -10;
  private int mouseLastX;
  private int mouseLastY;

  public Cube() {
    initWidget(uiBinder.createAndBindUi(this));

    initEvents();
  }

  private void initEvents() {
    $(Document.get()).keydown(new Function() {
      public boolean f(Event e) {
        onKeyDown(e.getKeyCode());
        return false;
      }
    }).mousedown(new Function() {
      public boolean f(Event e) {
        onMouseDown(e);
        return false;
      }
    });
  }
  private void onKeyDown(int keyCode) {
    switch (keyCode) {
      case 37: // left
        yAngle -= KEY_DOWN_ROTATION_ANGLE;
        break;

      case 38: // up
        xAngle += KEY_DOWN_ROTATION_ANGLE;
        break;

      case 39: // right
        yAngle += KEY_DOWN_ROTATION_ANGLE;
        break;

      case 40: // down
        xAngle -= KEY_DOWN_ROTATION_ANGLE;
        break;
    }
    ;

    rotate();
  }

  private void onMouseDown(Event e) {
    cube.addClassName(resources.style().noTransition());

    mouseLastX = e.getClientX();
    mouseLastY = e.getClientY();

    $(Document.get()).mousemove(new Function() {
      public boolean f(Event e) {
        onMouseMove(e);
        return false;
      }
    }).mouseup(new Function() {
      public void f() {
        cube.removeClassName(resources.style().noTransition());
        $(this).unbind("mousemove mouseup");
      }
    });
  }

  private void onMouseMove(Event e) {
    int x = e.getClientX();
    int y = e.getClientY();

    xAngle += mouseLastY - y;
    yAngle -= mouseLastX - x;

    mouseLastX = x;
    mouseLastY = y;

    rotate();
  }

  private void rotate() {
    String rotation = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
    cube.getStyle().setProperty("webkitTransform", rotation);
  }
}
