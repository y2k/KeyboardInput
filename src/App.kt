import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.document
import kotlin.browser.window

fun main(args: Array<String>) {
    // TODO:

    val canvas = document.getElementsByTagName("CANVAS")[0]
    window.alert("ELEMENT = " + canvas)

    window.onkeydown = {
        val e = it as KeyboardEvent
        window.alert("KEYBOARD = " + JSON.stringify(e.keyCode))
    }

}