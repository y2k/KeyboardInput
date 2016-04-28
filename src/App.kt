import kotlin.browser.document
import kotlin.browser.window

fun main(args: Array<String>) {
    // TODO:

    val canvas = document.getElementsByTagName("CANVAS")[0]
    window.alert("ELEMENT = " + canvas)

    window.onkeydown = {
        window.alert("KEYBOARD = " + it)
    }

}